import { reactive } from "vue";
import ContentStorage from "./ContentStorage";
import Skill from "./interface/Skill";

const store = {
  skills: reactive(new ContentStorage<Skill>())
};

export default store;
