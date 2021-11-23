use super::super::{super::DIGEST_SIZE, BlockWord, CellValue16, Table16Assignment};
use super::{compression_util::*, CompressionConfig, State};
use halo2::{
    arithmetic::FieldExt,
    circuit::Region,
    plonk::{Advice, Column, Error},
};

impl CompressionConfig {
    #[allow(clippy::many_single_char_names)]
    pub fn assign_digest<F: FieldExt>(
        &self,
        region: &mut Region<'_, F>,
        state: State,
    ) -> Result<[BlockWord; DIGEST_SIZE], Error> {
        let a_3 = self.extras[0];
        let a_4 = self.extras[1];
        let a_5 = self.message_schedule;
        let a_6 = self.extras[2];
        let a_7 = self.extras[3];
        let a_8 = self.extras[4];

        let (a, b, c, d, e, f, g, h) = match_state(state);

        let abcd_row = 0;
        region.assign_fixed(|| "s_digest", self.s_digest, abcd_row, || Ok(F::one()))?;
        let efgh_row = abcd_row + 2;
        region.assign_fixed(|| "s_digest", self.s_digest, efgh_row, || Ok(F::one()))?;

        // Assign digest for A, B, C, D
        self.assign_and_constrain(region, || "a_lo", a_3, abcd_row, a.dense_halves.0)?;
        self.assign_and_constrain(region, || "a_hi", a_4, abcd_row, a.dense_halves.1)?;
        let a = val_from_dense_halves(a.dense_halves);
        region.assign_advice(
            || "a",
            a_5,
            abcd_row,
            || {
                a.map(|a| F::from_u64(a as u64))
                    .ok_or(Error::SynthesisError)
            },
        )?;

        let b = self.assign_digest_word(region, abcd_row, a_6, a_7, a_8, b.dense_halves)?;
        let c = self.assign_digest_word(region, abcd_row + 1, a_3, a_4, a_5, c.dense_halves)?;
        let d = self.assign_digest_word(region, abcd_row + 1, a_6, a_7, a_8, d.dense_halves)?;

        // Assign digest for E, F, G, H
        self.assign_and_constrain(region, || "e_lo", a_3, efgh_row, e.dense_halves.0)?;
        self.assign_and_constrain(region, || "e_hi", a_4, efgh_row, e.dense_halves.1)?;
        let e = val_from_dense_halves(e.dense_halves);
        region.assign_advice(
            || "e",
            a_5,
            efgh_row,
            || {
                e.map(|e| F::from_u64(e as u64))
                    .ok_or(Error::SynthesisError)
            },
        )?;

        let f = self.assign_digest_word(region, efgh_row, a_6, a_7, a_8, f.dense_halves)?;
        let g = self.assign_digest_word(region, efgh_row + 1, a_3, a_4, a_5, g.dense_halves)?;
        let h = self.assign_digest_word(region, efgh_row + 1, a_6, a_7, a_8, h.dense_halves)?;

        Ok([
            BlockWord(a),
            BlockWord(b),
            BlockWord(c),
            BlockWord(d),
            BlockWord(e),
            BlockWord(f),
            BlockWord(g),
            BlockWord(h),
        ])
    }

    fn assign_digest_word<F: FieldExt>(
        &self,
        region: &mut Region<'_, F>,
        row: usize,
        lo_col: Column<Advice>,
        hi_col: Column<Advice>,
        word_col: Column<Advice>,
        dense_halves: (CellValue16, CellValue16),
    ) -> Result<Option<u32>, Error> {
        self.assign_and_constrain(region, || "lo", lo_col, row, dense_halves.0)?;
        self.assign_and_constrain(region, || "hi", hi_col, row, dense_halves.1)?;

        let val = val_from_dense_halves(dense_halves);
        region.assign_advice(
            || "word",
            word_col,
            row,
            || {
                val.map(|val| F::from_u64(val as u64))
                    .ok_or(Error::SynthesisError)
            },
        )?;

        Ok(val)
    }
}
