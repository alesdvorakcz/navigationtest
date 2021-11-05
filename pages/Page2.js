import React from 'react';
import {View, Text} from 'react-native';
import {Button, Portal, Modal} from 'react-native-paper';

const Page2 = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Page 2</Text>
      <Button onPress={showModal}>Show Modal (not working)</Button>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={{
            backgroundColor: 'white',
            alignItems: 'center',
            padding: 20,
          }}>
          <Text>Example Modal</Text>
        </Modal>
      </Portal>
    </View>
  );
};

export default Page2;
