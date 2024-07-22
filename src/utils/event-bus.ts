// event-bus.ts
import { reactive, readonly } from 'vue';

const state = reactive(new Map());

export default readonly({
  emit(event: string, payload: any) {
    state.forEach((callback, key) => {
      if (key === event) {
        callback(payload);
      }
    });
  },
  on(event: string, callback: Function) {
    state.set(event, callback);
  },
  off(event: string) {
    state.delete(event);
  }
});