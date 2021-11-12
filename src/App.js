import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';  // プラグインの読み込みは後
import allLocales from '@fullcalendar/core/locales-all';

function App() {
  const events=[
    { title: 'event 1', start: '2021-11-01' },
    { title: 'event 2', start: '2021-11-02T12:00:00' },
  ];

	return (
		<FullCalendar
			plugins={[dayGridPlugin]}
			initialView="dayGridMonth"
      events={events}
			locales={allLocales}
			locale="ja"
		/>
	);
}

export default App;