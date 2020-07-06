import FlashController from "@workarea/core/controllers/flash_controller.js"
import Message from "../templates/message.ejs"

export default class StorefrontFlashController extends FlashController {
  get template() {
    return Message
  }
}
