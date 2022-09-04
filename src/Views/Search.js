import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  SectionList,
  ScrollView,
} from 'react-native';
import styles from '../component/Style';
import Vocabulary from '../Data/Data';

const Search = () => {
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setFilterData(Vocabulary);
  }, []);
  const searchFilter = text => {
    if (text) {
      const newVocab = Vocabulary.filter(item => {
        const itemVocab = item.title
          ? item.title.toLowerCase()
          : ''.toLowerCase();

        const textData = text.toLowerCase();
        return itemVocab.indexOf(textData) > -1;
      });
      setFilterData(newVocab);
      setSearch(text);
    } else {
      setFilterData(Vocabulary);
      setSearch(text);
    }
  };

  return (
    console.log(filterData),
    (
      <View>
        <View style={styles.Search}>
          <TextInput
            style={{flex: 1, padding: 5}}
            placeholder="Search..."
            onChangeText={text => searchFilter(text)}
            value={search}
          />
          <Image
            source={require('../component/images/search.png')}
            style={styles.icon}
          />
        </View>

        <View>
          <ScrollView>
            {/* {Vocabulary.map(item => (
                        item.vocab.map(vocab => (

                            <TouchableOpacity style={styles.item} key={item.vocab.id}>
                                <Text style={styles.folder}>{vocab.title}</Text>
                                <Text style={styles.folder}>{vocab.mean}</Text>
                            </TouchableOpacity>

                        ))
                    ))} */}

            {/* {Vocabulary.map(item =>
            item.vocab.map(vocab => {
              console.log('vocab:', vocab);
            }),
          )} */}

            {filterData.map(item => (
              <TouchableOpacity style={styles.item} key={item.id}>
                <Text style={styles.folder}>{item.title}</Text>
                {console.log('title', filterData)}
                <Text style={styles.folder}>{item.mean}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    )
  );
};

export default Search;
