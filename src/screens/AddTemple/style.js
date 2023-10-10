import {StyleSheet} from 'react-native';
import {windowHeight} from '../../common/config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  form: {
    paddingHorizontal: 20,
    paddingTop: 0.1 * windowHeight,
  },
  formContainer: {
    marginHorizontal: 5,
  },
  subFormContainer: {
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  subFormHeading: {
    fontSize: 18,
    fontWeight: '500',
  },
  subFormElement: {
    marginVertical: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 25,
  },
  choiceText: {
    fontSize: 18,
    color: '#7995AA',
  },
  mapContainer: {
    marginVertical: 10,
    backgroundColor: 'rgba(88, 88, 88, 0.3)',
    height: 150,
    borderRadius: 20,
  },
  submitContainer: {
    marginVertical: 40,
    paddingBottom: 80,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'flex-end',
    columnGap: 12,
  },
  cancelButton: {
    button: {
      backgroundColor: 'transparent',
      padding: 10,
    },
    title: {
      color: 'black',
      fontSize: 18,
    },
  },
  nextButton: {
    button: {
      backgroundColor: '#FFAA02',
      paddingVertical: 10,
      paddingHorizontal: 26,
      borderRadius: 22,
    },
    title: {
      color: 'white',
      fontSize: 18,
    },
  },
  input: {
    width: '100%',
    height: 50,
    fontSize: 16,
  },
  inputArea: {
    width: '100%',
    height: 150,
    fontSize: 16,
  },
  inputCut: {
    width: '45%',
    height: 50,
    fontSize: 16,
  },
});
