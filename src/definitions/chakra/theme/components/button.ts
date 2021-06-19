const Button = {
  variants: {
    solid: {
      borderColor: 'inherit',
      bg: 'inherit',
      _focus: {
        ring: '3px',
        ringColor: 'brand.500',
      },
    },
    primary: {
      bg: 'brand.500',
      color: 'white',
      rounded: 'lg',
      minHeight: 12,
      _hover: {
        bg: 'brand.600',
      },
      _active: {
        bg: 'brand.700',
      },
      _focus: {
        ring: '3px',
        ringColor: 'brand.300',
      },
    },
  },
};

export default Button;
