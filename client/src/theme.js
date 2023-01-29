// color design tokens export
export const tokensDark = {
    grey: {
      0: "#ffffff", // manually adjusted
      10: "#f6f6f6", // manually adjusted
      50: "#f0f0f0", // manually adjusted
      100: "#e0e0e0",
      200: "#c2c2c2",
      300: "#a3a3a3",
      400: "#858585",
      500: "#666666",
      600: "#525252",
      700: "#3d3d3d",
      800: "#292929",
      900: "#141414",
      1000: "#000000", // manually adjusted
    },
    primary: {
        // blue
        100: "#d3ded5",
        200: "#a6bea9",
        300: "#7a9d7d",
        400: "#4d7d52",
        500: "#215c21",
        600: "#2b422b", // manually adjusted
        700: "#143714",
        800: "#0d2510",
        900: "#070d07",
      },
      secondary: {
        // yellow
        50: "#eaffe8", // manually adjusted
        100: "#e0ffe0",
        200: "#c2ffc3",
        300: "#a8ffa3",
        400: "#85ff8b",
        500: "#66ff70",
        600: "#52cc5e",
        700: "#3d9940",
        800: "#296630",
        900: "#143314",
      },
  };
  
  // function that reverses the color palette
  function reverseTokens(tokensDark) {
    const reversedTokens = {};
    Object.entries(tokensDark).forEach(([key, val]) => {
      const keys = Object.keys(val);
      const values = Object.values(val);
      const length = keys.length;
      const reversedObj = {};
      for (let i = 0; i < length; i++) {
        reversedObj[keys[i]] = values[length - i - 1];
      }
      reversedTokens[key] = reversedObj;
    });
    return reversedTokens;
  }
  export const tokensLight = reverseTokens(tokensDark);
  
  // mui theme settings
  export const themeSettings = (mode) => {
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // palette values for dark mode
              primary: {
                ...tokensDark.primary,
                main: tokensDark.primary[400],
                light: tokensDark.primary[400],
              },
              secondary: {
                ...tokensDark.secondary,
                main: tokensDark.secondary[300],
              },
              neutral: {
                ...tokensDark.grey,
                main: tokensDark.grey[400],
              },
              background: {
                default: tokensDark.primary[900],
                alt: tokensDark.primary[800],
              },
            }
          : {
              // palette values for light mode
              primary: {
                ...tokensLight.primary,
                main: tokensDark.grey[50],
                light: tokensDark.grey[100],
              },
              secondary: {
                ...tokensLight.secondary,
                main: tokensDark.secondary[600],
                light: tokensDark.secondary[700],
              },
              neutral: {
                ...tokensLight.grey,
                main: tokensDark.grey[500],
              },
              background: {
                default: tokensDark.grey[0],
                alt: tokensDark.grey[50],
              },
            }),
      },
      typography: {
        fontFamily: ["Quicksand", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Quicksand", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Quicksand", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Quicksand", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Quicksand", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Quicksand", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Quicksand", "sans-serif"].join(","),
          fontSize: 14,
        },
      },
    };
  };