import { useState, useEffect } from 'react';
import {
  BACKGROUND_COLORS,
  LIGHT_BACKGROUND,
  TEXT_COLORS,
  LIGHT_TEXT,
} from 'tokens/colors';

export const useColor = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [palette, setPalette] = useState(BACKGROUND_COLORS);
  const [textPalette, setTextPalette] = useState(TEXT_COLORS);

  useEffect(() => {
    if (darkMode) {
      setPalette(BACKGROUND_COLORS);
      setTextPalette(TEXT_COLORS);
    } else {
      setPalette(LIGHT_BACKGROUND);
      setTextPalette(LIGHT_TEXT);
    }
  }, [darkMode]);

  return { palette, textPalette, darkMode, setDarkMode };
};
