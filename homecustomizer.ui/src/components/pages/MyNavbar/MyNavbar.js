import './MyNavbar.scss';
import React from 'react';

class MyNavbar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/homeCustomizer">Home Customizer</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="/home">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="/siding">Siding</a>
            <a class="nav-item nav-link" href="/shutters">Shutters</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default MyNavbar;