import type { HookHandler, HookOptions, Swup } from 'swup';

export function rerun(
  handler: HookHandler<'page:view'>,
  options: HookOptions = {},
) {
  const swup = (window as any).swup as Swup;
  if (swup) {
    return swup.hooks.on('page:view', handler, options);
  }

  document.addEventListener('swup:enable', () => {
    const swup = (window as any).swup as Swup;
    swup.hooks.on('page:view', handler, options);
  });
}
