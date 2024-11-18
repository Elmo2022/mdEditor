// useFetch.js
import { ref, onMounted } from 'vue';

export function useFetch(url) {
  const datas = ref(null);
  const error = ref(null);
  const loading = ref(true);

  const fetchData = async () => {
    loading.value = true;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');
      datas.value = await response.json();
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchData);

  return { datas, error, loading, refetch: fetchData };
}
