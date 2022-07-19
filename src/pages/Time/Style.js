import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Styles = StyleSheet.create({
  container: {
    marginHorizontal: hp(6),
    marginVertical: hp(6),
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: wp(0.2),
    // borderRadius: wp(2),
    // height: hp(6),
    // alignItems: 'center',
    // justifyContent: 'center',
    // width: wp(60),
    // borderColor: '#34B5FF',
  },
});

export default Styles;
