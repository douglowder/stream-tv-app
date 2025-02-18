import RohText from '@components/RohText';
import TouchableHighlightWrapper, {
  TTouchableHighlightWrapperRef,
} from '@components/TouchableHighlightWrapper';
import { Colors } from '@themes/Styleguide';
import { scaleSize } from '@utils/scaleSize';
import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';

type TSettingsNavMenuItemProps = {
  title: string;
  canMoveUp?: boolean;
  canMoveDown?: boolean;
  onFocus: (
    ref: React.MutableRefObject<TTouchableHighlightWrapperRef | undefined>,
  ) => void;
  isActive: boolean;
  hasTVPreferredFocus?: boolean;
};
const SettingsNavMenuItem: React.FC<TSettingsNavMenuItemProps> = props => {
  const {
    title,
    canMoveUp,
    canMoveDown,
    onFocus,
    isActive,
    hasTVPreferredFocus,
  } = props;
  const touchableRef = useRef<TTouchableHighlightWrapperRef>();
  const focusHandler = () => {
    if (typeof onFocus === 'function') {
      onFocus(touchableRef);
    }
  };

  return (
    <TouchableHighlightWrapper
      ref={touchableRef}
      onFocus={focusHandler}
      canMoveUp={canMoveUp}
      canMoveDown={canMoveDown}
      hasTVPreferredFocus={hasTVPreferredFocus}
      style={styles.menuButtonInActive}
      styleBlured={isActive ? styles.menuButtonActiveWithoutFocus : undefined}
      styleFocused={styles.menuButtonActiveWithFocus}>
      <View style={styles.root}>
        <RohText
          style={[styles.buttonTitle, isActive ? {} : styles.inActiveTitle]}>
          {title}
        </RohText>
      </View>
    </TouchableHighlightWrapper>
  );
};

export default SettingsNavMenuItem;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: scaleSize(25),
  },
  menuButtonActiveWithFocus: {
    backgroundColor: Colors.streamPrimary,
    paddingLeft: scaleSize(20),
  },
  menuButtonActiveWithoutFocus: {
    //backgroundColor: Colors.tVMidGrey,
    paddingLeft: scaleSize(20),
  },
  menuButtonInActive: {
    paddingLeft: scaleSize(25),
  },
  buttonTitle: {
    fontSize: scaleSize(26),
    lineHeight: scaleSize(30),
    letterSpacing: scaleSize(1),
    color: Colors.defaultTextColor,
  },
  inActiveTitle: {
    opacity: 0.7,
  },
});
