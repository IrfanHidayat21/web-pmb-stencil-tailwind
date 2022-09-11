module.exports = {
  purge: {
    enabled: true,
    content: [
      {
        raw: '<html><body><div class="app"></div></body></html>',
        extension: 'html'
      },
      'src/components/app-footer/app-footer.tsx',
      'src/components/app-header/app-header.tsx',
      'src/components/app-sidemenu/app-sidemenu.tsx',
      'src/components/page-register/page-register.tsx',
      'src/components/page-login/page-login.tsx',
      'src/components/page-dashboard/page-dashboard.tsx',
      'src/components/page-form/page-form.tsx',
      'src/components/page-profile/page-profile.tsx',
      'src/components/page-prodi-list/page-prodi-list.tsx'
    ],
    css: [
      {
        raw: 'body { margin: 0 }'
      },
      'src/global/app.css'
    ],
    keyframes: true,
    whitelist: ['random', 'yep', 'button'],
    rejected: true,
    variables: true,
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
