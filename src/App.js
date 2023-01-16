import logo from './logo.svg';
import './App.css';
import Table from './components/Table'

const tasks = [
  {
    id: '1',
    title: 'Curabitur vel felis ut lacus gravida',
    desc: 'Curabitur vel felis ut lacus gravida rhoncus. Integer sit amet congue nulla. Proin vitae sapien nec nibh sollicitudin mattis. Phasellus cursus erat augue, sit amet porta mauris pellentesque id.',
    deadline: '2023-01-28',
    assignTo: 'Cedrick',
    status: 'Completed'
  },
  {
    id: '2',
    title: 'Orci varius natoque penatibus',
    desc: 'Phasellus ultrices eros eget diam interdum auctor. Fusce pellentesque risus molestie neque aliquam lacinia. In congue, ligula in facilisis vehicula, orci sapien euismod nisi, nec venenatis eros massa vel enim. ',
    deadline: '2023-04-23',
    assignTo: 'Benoit',
    status: 'In progress'
  },
  {
    id: '3',
    title: 'Nullam vel malesuada metus',
    desc: 'In mollis massa at dolor elementum, id aliquet sem dignissim. Sed pharetra tellus eget nisl viverra tincidunt. Maecenas nulla massa, condimentum dignissim purus eu, mollis tincidunt mi.',
    deadline: '2023-02-12',
    assignTo: 'Cedrick',
    status: 'In progress'
  },
  {
    id: '4',
    title: 'Mauris dignissim in dolor sed facilisis',
    desc: 'Morbi neque quam, ullamcorper bibendum blandit et, finibus eget massa. Duis sem magna, tincidunt id condimentum in, sodales non massa. ',
    deadline: '2023-01-14',
    assignTo: 'Benoit',
    status: 'Completed'
  },
]

function App() {
  return (
    <div className="app bg-zinc-100 min-h-screen flex flex-col">
      <header className="header bg-purple">
        <img src={logo} />
      </header>
      <section className="grow">
        <Table title="Tasks" data={tasks} />
      </section>
      <footer>test</footer>
    </div>
  );
}

export default App;
