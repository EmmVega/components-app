import { useThemeColor } from '@/hooks/useThemeColor';
import ThemedView from '@/presentation/shared/ThemedView';
import ThemeText from '@/presentation/shared/ThemeText';
import { useState } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';

const PullToRefreshScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const primaryColor = useThemeColor({}, 'primary')

  const onRefresh = async () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false)
    }, 3000)
  }

  return (
    <ScrollView 
      refreshControl={
      <RefreshControl 
        refreshing={isRefreshing} 
        onRefresh={onRefresh}
        colors={[primaryColor, 'red', 'orange', 'green']}
        />
      }
      >
      <ThemedView margin>
        <ThemeText>PullToRefreshScreen</ThemeText>
      </ThemedView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
