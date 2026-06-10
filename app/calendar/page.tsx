import { permanentRedirect } from "next/navigation";

export default function CalendarRedirectPage() {
  permanentRedirect("/schedule");
}
