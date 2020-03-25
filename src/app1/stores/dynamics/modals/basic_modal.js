
export const base_modal = {
  namespaced: true,
  state: {
    isShow: false
  },
  
  mutations:{
    show (base_modal) {
      base_modal.isShow = true
    },
    hide (base_modal) {
      base_modal.isShow = false
    }
  }
  
 
}