import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FeedListItem } from './src/components/FeedListItem';

export default function App() {
  return (
      <SafeAreaProvider>
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <FeedListItem
                    image='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA5MjJfMTgz%2FMDAxNTY5MTIxNDg4MjQ3.sCL4BHO7JwbbVVjlz-qbl02tpchOpwDaIwN8dUBviQQg.jaox6CnNwwUgucLF-SziAd3J8R14lCQa6WN8XoZyvQIg.JPEG.gucjswo2%2F%25BD%25BA%25C0%25A7%25BD%25BA_%25C7%25C7%25B8%25A3%25BD%25BA%25C6%25AE_%25B7%25E7%25C3%25BC%25B8%25A5_%25C0%25CE%25C5%25CD%25B6%25F3%25C4%25CB_%25B0%25F1%25B5%25E7%25C6%25D0%25BD%25BA_%25BF%25AD%25C2%25F7_%25284%2529.jpg&type=a340'
                    likeCount={20}
                    writer='senery'
                    comment='Great!!'
                    isLiked={true}
                />
            </View>
      </SafeAreaProvider>
  );
}

