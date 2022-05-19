import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { dom } from "@fortawesome/fontawesome-svg-core";

library.add(far);
library.add(fas);
library.add(fab);
// library.add(faPhone);
// library.add(faUser);
// library.add(faFlag);
dom.watch();

export default FontAwesomeIcon;