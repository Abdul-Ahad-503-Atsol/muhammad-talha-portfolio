const VARIANT_CLASSES = {
  primary: 'btn btn-dark',
  accent: 'btn btn-light',
  subtle: 'btn btn-subtle',
  outline: 'project-site-link',
  text: 'text-link',
  nav: 'nav-contact',
  icon: 'modal-close',
  filter: 'filter',
  inline: 'project-see-more',
  toggle: 'skills-toggle',
  dot: 'reviews-dot',
  card: 'cert-card',
  menu: 'mobile-toggle',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  pill = false,
  active = false,
  href,
  className = '',
  children,
  ...props
}) {
  const Component = href ? 'a' : 'button';
  const classes = [
    VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.primary,
    size === 'sm' ? 'btn-sm' : null,
    pill ? 'btn-pill' : null,
    active ? 'active' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component
      className={classes}
      {...(Component === 'a' ? { href } : { type: 'button' })}
      {...props}
    >
      {children}
    </Component>
  );
}
