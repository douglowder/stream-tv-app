import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { scaleSize } from '@utils/scaleSize';
import {
  TEventContainer,
  TVSEventDetailsCreative,
} from '@services/types/models';
import RohText from '@components/RohText';
import GoDown from '../commonControls/GoDown';
import get from 'lodash.get';
import MultiColumnRoleNameList from '../commonControls/MultiColumnRoleNameList';
import { Colors } from '@themes/Styleguide';

type CreativesProps = {
  event: TEventContainer;
  nextScreenText: string;
};

const Creatives: React.FC<CreativesProps> = ({ event, nextScreenText }) => {
  const creativesList: Array<TVSEventDetailsCreative> = get(
    event.data,
    ['vs_event_details', 'creatives'],
    [],
  );

  const listOfEvalableCreatives = creativesList.reduce<{
    [key: string]: string;
  }>((acc, cast) => {
    const role = get(cast, ['attributes', 'role'], '');
    const name = get(cast, ['attributes', 'name'], '');
    if (!name) {
      return acc;
    }
    if (role && role in acc) {
      acc[role] += `, ${name}`;
    } else {
      acc[role] = name;
    }
    return acc;
  }, {});
  const data: Array<{ role: string; name: string }> = Object.entries(
    listOfEvalableCreatives,
  ).map(([role, name]) => ({ role, name }));

  return (
    <View style={styles.generalContainer}>
      <View style={styles.wrapper}>
        <View style={styles.titleContainer}>
          <RohText style={styles.title}>Creatives</RohText>
        </View>
        <View style={styles.creativesContainer}>
          <MultiColumnRoleNameList
            data={data}
            columnHeight={scaleSize(770)}
            columnWidth={scaleSize(387)}
          />
        </View>
      </View>
      <View style={styles.downContainer}>
        <GoDown text={nextScreenText} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  generalContainer: {
    height: Dimensions.get('window').height,
    paddingRight: scaleSize(200),
    paddingTop: scaleSize(110),
  },
  wrapper: {
    flexDirection: 'row',
    height: Dimensions.get('window').height - scaleSize(220),
  },
  downContainer: {
    flexDirection: 'row',
    height: scaleSize(110),
    paddingBottom: scaleSize(60),
  },
  title: {
    width: '100%',
    color: Colors.title,
    fontSize: scaleSize(72),
    textTransform: 'uppercase',
  },
  creativesContainer: {
    width: scaleSize(945),
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Creatives;
