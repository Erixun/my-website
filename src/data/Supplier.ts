import axios from "axios";
import ContentStorage from "./ContentStorage";

export default class Supplier {
  constructor(private recipient: ContentStorage<any>, private origin: string) { }

  supply() {
    axios.get(this.origin).then((resp) => {
      this.recipient.receive(resp.data);
    });
  }
}