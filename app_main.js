class MasterButtons extends React.Component {
  render() {
    return (
      <button type="button" className="studio" > Studio Art </button>
        <button type="button" className="about"> About </button>
          <button type="button" className="cs"> Computer Science </button>
    )
  }

}

ReactDOM.render(
  <MasterButtons />,
  document.getElementById('app')
);
