import {Colors, Typography, Spacings} from 'react-native-ui-lib';
import {statusBarHeight} from './scaleAccordingToDevice';
Colors.loadColors({
  c35: '#353B48',
  c59: '#596379',
  c04: '#046FDB',
  cfe: '#FE4365',
  c83: '#8395A7',
  cf15: '#F15B40',
  c03: '#0356A9',
  cd1: '#D1D5DD',
  cef: '#EFF0F3',
  cdd: '#DD4839',
  cdf: '#DFEFFE',
  c3b: '#3B5998',
  cdd4: '#DD4B39',
  cf7: '#F7F8FA',
  c4d: '#4dff52',
  c24: '#24DCB3',
  cf2: '#F2F2F2',
  cmodal: 'rgba(53,59,72,0.8)',
  cf1: '#F1F1F1',
  cfd: '#FDC066',
  c7e: '#7ED321',
});
const FONT_PREFIX = 'Quicksand';
export const FONTS = {
  medium: `${FONT_PREFIX}-Medium`,
  bold: `${FONT_PREFIX}-Bold`,
  light: `${FONT_PREFIX}-Light`,
  regular: `${FONT_PREFIX}-Regular`,
  semiBold: `${FONT_PREFIX}-SemiBold`,
};

//Typography

Typography.loadTypographies({
  //bold
  B48: {fontSize: 48, fontFamily: FONTS.bold, lineHeight: 60},
  B40: {fontSize: 40, fontFamily: FONTS.bold, lineHeight: 50},
  B30: {fontSize: 30, fontFamily: FONTS.bold, lineHeight: 40},
  B16: {fontSize: 16, fontFamily: FONTS.bold, lineHeight: 24},
  B14: {fontSize: 14, fontFamily: FONTS.bold, lineHeight: 17.5},
  B13: {fontSize: 13, fontFamily: FONTS.bold, lineHeight: 16.25},
  B12: {fontSize: 12, fontFamily: FONTS.bold, lineHeight: 18},
  B10: {fontSize: 10, fontFamily: FONTS.bold, lineHeight: 12.5},
  //medium
  M100: {fontSize: 100, fontFamily: FONTS.medium, lineHeight: 125},
  M30: {fontSize: 30, fontFamily: FONTS.medium, lineHeight: 37.5},
  M18: {fontSize: 18, fontFamily: FONTS.medium, lineHeight: 28},
  M16: {fontSize: 16, fontFamily: FONTS.medium, lineHeight: 24},
  M14: {fontSize: 14, fontFamily: FONTS.medium, lineHeight: 17.5},
  M13: {fontSize: 13, fontFamily: FONTS.medium, lineHeight: 16.25},
  M12: {fontSize: 12, fontFamily: FONTS.medium, lineHeight: 18},
  M10: {fontSize: 10, fontFamily: FONTS.medium, lineHeight: 12.5},
  //description
  D14: {fontSize: 14, fontFamily: 'PTSerif-Italic', lineHeight: 24},
  D14R: {fontSize: 14, fontFamily: 'PTSerif-Regular', lineHeight: 24},
  D18: {fontSize: 18, fontFamily: 'PTSerif-Italic', lineHeight: 28},
  D16: {fontSize: 16, fontFamily: 'PTSerif-Italic', lineHeight: 26},
  D16R: {fontSize: 16, fontFamily: 'PTSerif-Regular', lineHeight: 26},

  //regular
  R16: {fontSize: 16, fontFamily: FONTS.regular, lineHeight: 24},
});

Spacings.loadSpacings({
  small: 16,
  medium: 24,
  header: statusBarHeight,
});
