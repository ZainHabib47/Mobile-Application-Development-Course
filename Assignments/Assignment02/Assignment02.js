import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  SectionList,
  Pressable,
  Modal,
  StyleSheet,
} from 'react-native';

const contactList = [
  { id: '01', name: 'Ali Raza', number: '123-456-7890', group: 'Family' },
  { id: '02', name: 'Sara Qureshi', number: '234-567-8901', group: 'Friends' },
  { id: '03', name: 'Zain Siddiqui', number: '345-678-9012', group: 'Work' },
  { id: '04', name: 'Mina Tariq', number: '456-789-0123', group: 'Family' },
  { id: '05', name: 'Hassan Malik', number: '567-890-1234', group: 'Friends' },
  { id: '06', name: 'Tania Asad', number: '678-901-2345', group: 'Work' },
  { id: '07', name: 'Rehan Bashir', number: '789-012-3456', group: 'Family' },
  { id: '08', name: 'Nida Farooq', number: '890-123-4567', group: 'Work' },
  { id: '09', name: 'Yasir Ameen', number: '901-234-5678', group: 'Friends' },
  { id: '10', name: 'Fizza Khan', number: '012-345-6789', group: 'Work' },
];

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [activeContact, setActiveContact] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);

  const groups = ['Family', 'Friends', 'Work'];

  const categorizedContacts = groups
    .map(type => {
      const matched = contactList.filter(
        contact =>
          contact.group === type &&
          (contact.name.toLowerCase().includes(searchText.toLowerCase()) ||
            contact.number.includes(searchText))
      );
      return matched.length > 0 ? { title: type, data: matched } : null;
    })
    .filter(Boolean);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>My Contact Book</Text>

      <TextInput
        style={styles.input}
        placeholder="Search by name or number"
        value={searchText}
        onChangeText={setSearchText}
      />

      <SectionList
        sections={categorizedContacts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              setActiveContact(item);
              setPopupVisible(true);
            }}
            style={styles.itemBox}
          >
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemNumber}>{item.number}</Text>
          </Pressable>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionTitle}>{title}</Text>
        )}
      />

      <Modal visible={popupVisible} transparent animationType="slide">
        <View style={styles.overlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalHeader}>Contact Information</Text>
            <Text style={styles.modalText}>Name: {activeContact?.name}</Text>
            <Text style={styles.modalText}>Number: {activeContact?.number}</Text>
            <Text style={styles.modalText}>Group: {activeContact?.group}</Text>
            <Pressable
              style={styles.closeButton}
              onPress={() => setPopupVisible(false)}
            >
              <Text style={{ color: 'white' }}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f7',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#111827',
  },
  input: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 8,
    borderColor: '#cbd5e1',
    borderWidth: 1,
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    backgroundColor: '#c7d2fe',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginTop: 10,
  },
  itemBox: {
    backgroundColor: '#fff',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  itemName: {
    fontSize: 16,
    fontWeight: '500',
  },
  itemNumber: {
    fontSize: 14,
    color: '#6b7280',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(30,41,59,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    elevation: 10,
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  modalText: {
    fontSize: 15,
    marginBottom: 6,
  },
  closeButton: {
    backgroundColor: '#2563eb',
    padding: 10,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 14,
  },
});
