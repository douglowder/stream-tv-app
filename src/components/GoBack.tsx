import React, { useLayoutEffect } from 'react';
import { View, StyleSheet, Dimensions, BackHandler } from 'react-native';
import { navMenuManager } from '@components/NavMenu';
import { scaleSize } from '@utils/scaleSize';
import { useNavigation } from '@react-navigation/native';
import GoBackIcon from '@assets/svg/navIcons/GoBack.svg';
import TouchableHighlightWrapper from './TouchableHighlightWrapper';
import { globalModalManager } from '@components/GlobalModal';

type TGoBackProps = {};

const GoBack: React.FC<TGoBackProps> = () => {
  const navigation = useNavigation();
  const onFocusHandler = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
      navMenuManager.showNavMenu();
    }
  };
  useLayoutEffect(() => {
    const handleBackButtonClick = () => {
      if (globalModalManager.isModalOpen()) {
        return true;
      }
      navMenuManager.showNavMenu();
      return false;
    };
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  return (
    <TouchableHighlightWrapper
      onFocus={onFocusHandler}
      style={styles.wrapperStyle}
      styleFocused={styles.wrapperStyleActive}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <GoBackIcon width={scaleSize(40)} height={scaleSize(40)} />
        </View>
      </View>
    </TouchableHighlightWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: scaleSize(160),
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    width: scaleSize(40),
    height: scaleSize(40),
  },
  wrapperStyle: {
    opacity: 0.5,
  },
  wrapperStyleActive: {
    opacity: 0.7,
  },
});

export default GoBack;
