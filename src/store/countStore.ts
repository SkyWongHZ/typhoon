import { create } from 'zustand'
import { devtools ,persist } from 'zustand/middleware';

const countStore = create((set,get) => ({
  count: 0,
  increasePopulation: () => {
    console.log('get',get());
    return (
      set((state: { count: number; }) => ({ count: state.count + 1 }))
    )
  },
  removeAllCount: () => set({ count: 0 }),
  updateCount: (newBears: any) => {
    return set({ count: newBears })
  },
}))

export default countStore

    