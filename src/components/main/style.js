import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8EAED',
    flex: 1,
  },
  tasksWrapper: {
    paddingTop: hp(9),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: hp(4.3),
    fontWeight: 'bold',
    color: '#34B5FF',
  },

  addContainer: {
    marginTop: wp(10),
  },

  addTitle: {
    fontSize: hp(2.1),
    color: '#003131',
  },

  item: {
    padding: 13.6,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginHorizontal: wp(4),
    backgroundColor: '#ddd',
  },

  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: wp(0.8),
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
  itemText: {
    maxWidth: '80%',
  },
  checkBox: {
    marginRight: wp(2),
    color: '#000',
    borderColor: '#F1F1F1',
  },

  rightContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: hp(2),
    // marginHorizontal: hp(2),
  },
  btn: {
    paddingHorizontal: hp(1),
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    alignItems: 'center',
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
    backgroundColor: '#34B5FF',
  },
  addText: {color: '#FFF', fontSize: hp(3.7)},
  nullInfo: {
    marginTop: wp(14),
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyImage: {
    width: wp(60),
    height: wp(60),
    borderRadius: wp(3),
  },
  textContainer: {
    marginTop: wp(4),
    padding: wp(1),
    alignItems: 'center',
  },
  text: {
    fontSize: hp(2.3),
    fontWeight: '500',
    padding: wp(1),
    color: '#393E42',
  },
  deleteBtn: {
    paddingHorizontal: wp(2),
  },
  timeContainer: {
    marginTop: hp(7.3),
    marginLeft: hp(-10),
  },
  time: {
    color: '#585858',
  },
});

export default styles;
