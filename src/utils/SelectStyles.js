export const SelectStyles = {
  control: base => ({
    ...base,
    backgroundColor: '#F7F7F7',
    borderRadius: '12px',
    cursor: 'pointer',
    boxShadow: 'none',
    height: '44px',
    width: '100%',
    color: '#101828',
    fontSize: '18px',
    fontFamily: 'Manrope',
    fontWeight: '500',
    '&:hover': {
      borderColor: '#101828',
    },
    '&:focus': {
      borderColor: '#101828',
    },
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: '#FFFFFF',
    color: state.isSelected
      ? '#101828'
      : state.isFocused
      ? '#101828'
      : ' #8D929A',
    fontSize: '16px',
    fontWeight: 500,
    padding: '12px 16px',
    cursor: 'pointer',
    width: '100%',
  }),
  menu: base => ({
    ...base,
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    overflow: 'hidden',
    marginTop: 4,
  }),
  singleValue: base => ({
    ...base,
    color: '#101828',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    minWidth: 0,
    maxWidth: '100%',
  }),
  placeholder: base => ({
    ...base,
    color: '#101828',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: base => ({
    ...base,
    color: '#8D929A',
    padding: '0 8px',
  }),
};

