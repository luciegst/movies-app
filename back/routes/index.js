import express from 'express';
import connection from './conf';

// connecté ou non terminal ?//
connection.connect((err) => {
  if (err) {
    console.log('Error :', err);
  } else {
    console.log('This is working dude !');
  }
});

const router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'Express'
  });
});

// Get all movies //
router.get('/movies', (req, res) => {
  connection.query('SELECT * from movie', (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

// Search movie //
router.get('/search', (req, res) => {
  const keyword = `%${req.query.keyword}%`;
  connection.query('SELECT * from movie WHERE title LIKE ?', [keyword], (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});


// Create a new movie //
router.post('/new', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO movie SET ?', formData, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

// Delete a movie //
router.delete('/delete/:id', (req, res) => {
  const idMovie = req.params.id;
  connection.query('DELETE FROM movie WHERE id = ?', idMovie, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

export default router;
