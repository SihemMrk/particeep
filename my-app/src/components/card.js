import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { fetchData } from "../store";
import { connect } from "react-redux";

class SimpleCard extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
  async componentDidMount() {
    await this.props.fetchData();
  }
  render() {
    const classes = makeStyles({
      card: {
        width: 50
      },
      bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)"
      },
      title: {
        fontSize: 14
      },
      pos: {
        marginBottom: 12
      }
    });
    // const bull = <span className={classes.bullet}>•</span>;
    const data = this.props.dataSource;

    return (
      <div>
        {data.map(film => {
          return (
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {film.category}
                </Typography>
                <Typography variant="h5" component="h2">
                  {film.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={this.props.delete(movie)}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dataSource: state.dataSource
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData()),
  delete: movies => dispatch(removeFilm(movie))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleCard);
