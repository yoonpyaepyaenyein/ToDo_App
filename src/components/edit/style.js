import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: hp(4),
  },
  title: {
    fontSize: hp(3),
    fontWeight: 'bold',
    marginTop: hp(20),
    color: '#34B5FF',
  },
  writeTaskWrapper: {
    // position: 'absolute',
    // bottom: 60,
    paddingTop: hp(7),
    width: '100%',
    alignItems: 'center',
  },

  input: {
    paddingVertical: 15,
    width: wp(80),
    paddingHorizontal: wp(5),
    backgroundColor: '#fff',
    borderRadius: wp(10),
    borderColor: '#C0C0C0',
    borderWidth: 1,
    shadowColor: '#34B5FF',
    shadowOffset: {width: 0, height: hp(0.5)},
    shadowOpacity: 0.2,
    shadowRadius: hp(1),
    elevation: 3,
  },

  btn: {
    flexDirection: 'row',
    marginTop: hp(4),
  },

  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    shadowColor: '#34B5FF',
    shadowOffset: {width: 0, height: hp(0.5)},
    shadowOpacity: 0.2,
    shadowRadius: hp(1),
    elevation: 3,
    marginRight: wp(10),
    backgroundColor: '#34B5FF',
  },
  addText: {
    color: '#fff',
    fontSize: hp(3.8),
  },

  cancelWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    shadowColor: '#34B5FF',
    shadowOffset: {width: 0, height: hp(0.5)},
    shadowOpacity: 0.2,
    shadowRadius: hp(1),
    elevation: 3,
  },
  cancelText: {
    color: 'red',
  },

  // inputContainer: {
  //   marginVertical: hp(3),
  // },
  // titleText: {
  //   fontSize: hp(2.1),
  //   color: '#003131',
  // },
  // status: {
  //   fontSize: hp(2.1),
  //   paddingTop: hp(3),
  //   color: '#003131',
  // },
  // input: {
  //   borderWidth: hp(0.1),
  //   borderColor: '#003131',
  //   width: wp(80),
  //   fontSize: hp(2),
  //   marginTop: hp(1),
  //   borderRadius: hp(0.5),
  //   paddingLeft: hp(2),
  // },
  // btnContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-evenly',
  //   marginVertical: hp(2),
  // },
  // addTaskBtn: {
  //   borderWidth: wp(0.1),
  //   backgroundColor: '#ddd',
  //   width: wp(22),
  //   height: hp(4),
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderRadius: wp(1),
  //   borderColor: '#ddd',
  // },
  // addText: {
  //   color: '#003131',
  // },
  // cancelBtn: {
  //   borderWidth: wp(0.1),
  //   backgroundColor: '#003131',
  //   width: wp(22),
  //   height: hp(4),
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderRadius: wp(1),
  //   borderColor: '#ddd',
  // },
  // cancelText: {
  //   color: '#fff',
  // },
});

export default styles;
