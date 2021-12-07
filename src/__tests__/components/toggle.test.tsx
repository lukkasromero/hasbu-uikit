import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Toggle from "../../components/Toggle/Toggle";

const handleChange = jest.fn();

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Toggle checked onChange={handleChange} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-dlfnbm fMqUTN"
      >
        <input
          checked=""
          class="sc-gsTCUz TpSLF"
          type="checkbox"
        />
        <div
          class="sc-bdfBwQ iwlTPv"
        />
      </div>
    </DocumentFragment>
  `);
});
