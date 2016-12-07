class MasterButtons extends React.Component {
  render() {
    return (
      <button className="studio"> Studio Art </button>
        <button className="about"> About </button>
          <button className="cs"> Computer Science </button>
    )
  }

}

ReactDOM.render(
  <MasterButtons />,
  document.getElementById('app')
);
