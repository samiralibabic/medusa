import Medusa from "@medusajs/medusa-js"
const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
// must be previously logged in or use api token
medusa.admin.giftCards.delete(gift_card_id)
.then(({ id, object, deleted }) => {
  console.log(id);
});