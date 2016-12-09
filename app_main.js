class MasterButtons extends React.Component {
  render() {
    return (
      <button type="button" className="studio" style="art_photos/apple.jpg"> Studio Art </button>
      <input type="image" src="art_photos/box1.jpg" />
        <button type="button" className="about"> About </button>
          <button type="button" className="cs"> Computer Science </button>
    )
  }

}

ReactDOM.render(
  <MasterButtons />,
  document.getElementById('app')
);
