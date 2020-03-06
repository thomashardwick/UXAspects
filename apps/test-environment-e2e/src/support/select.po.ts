export const getSelectInput = () => cy.get('ux-select input');
export const getSelectPlaceholder = () => getSelectInput().invoke('attr', 'placeholder');
export const getTypeahead = () => cy.get('ux-typeahead');
export const getSelection = () => cy.get('#selectedLocation code');
export const getDropdownItems = () => getTypeahead().get('.ux-typeahead-option');
export const getDropdownItem = (index: number) => getTypeahead().get(`#dropdown-typeahead-option-${index}`);

export const setItemMode = (mode: SelectItemMode) => mode === SelectItemMode.Strings ?
    cy.get('ux-radio-button[option="strings"]').click() :
    cy.get('ux-radio-button[option="objects"]').click();

export const enum SelectItemMode {
    Strings,
    Objects
}