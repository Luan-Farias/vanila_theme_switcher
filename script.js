const light = createThemeObject({
    title: 'light',

    colors: {
        primary: '#C62E65',
        secondary: '#D63AF9',

        background: '#F5F5F5',
        text: '#333',
    },
});

const dark = createThemeObject({
    title: 'dark',

    colors: {
        primary: '#333',
        secondary: '#C62E65',

        background: '#222',
        text: '#FFF',
    },
});

const theme = createThemeObject();

const storageTheme =
    localStorage.getItem('theme') === 'dark'
        ? changeThemeToNewColors(dark)
        : changeThemeToNewColors(light);

function createThemeObject(themeObject) {
    const theme = {
        title: themeObject?.title ?? '',
        colors: {
            primary: themeObject?.colors.primary ?? '',
            secondary: themeObject?.colors.secondary ?? '',
            background: themeObject?.colors.background ?? '',
            text: themeObject?.colors.text ?? '',
        },
    };
    return theme;
}

function toogleTheme() {
    switch (theme?.title) {
        case 'light':
            changeThemeToNewColors(dark);
            break;
        case 'dark':
            changeThemeToNewColors(light);
            break;
    }
}

function changeThemeToNewColors(newTheme) {
    theme.title = newTheme.title;
    theme.colors.primary = newTheme.colors.primary;
    theme.colors.secondary = newTheme.colors.secondary;
    theme.colors.background = newTheme.colors.background;
    theme.colors.text = newTheme.colors.text;
    localStorage.setItem('theme', newTheme.title);
    changeColorsInCssRoot();
}

function changeColorsInCssRoot() {
    document.documentElement.style.setProperty(
        '--primary',
        theme.colors.primary
    );
    document.documentElement.style.setProperty(
        '--secondary',
        theme.colors.secondary
    );
    document.documentElement.style.setProperty(
        '--background',
        theme.colors.background
    );
    document.documentElement.style.setProperty('--text', theme.colors.text);
}
