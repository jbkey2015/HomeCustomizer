using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HomeCustomizer.DataAccess;
using Microsoft.AspNetCore.Mvc;


namespace HomeCustomizer.Controllers
{
    [Route("api/colorBoard")]
    [ApiController]
    public class ColorBoardController : ControllerBase
    {
        ColorBoardRepo _repository;

        public ColorBoardController(ColorBoardRepo repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult GetColorBoards()
        {
            var allColorBoards = _repository.GetAllColorBoards();

            return Ok(allColorBoards);
        }

        [HttpGet("colorBoardId/{id}")]
        public IActionResult GetColorBoardById(int id)
        {
            var colorBoards = _repository.GetColorBoardById(id);
            if (colorBoards == null)
            {
                return NotFound("That color board option does not exist");
            }
            return Ok(colorBoards);
        }

        [HttpGet("{query}")]
        public IActionResult GetFilterdColorBoards(string query)
        {
            var colorBoards = _repository.GetAllColorBoards();
            var filteredBoards = colorBoards
                .Where(cb => cb.SidingColor.ToLower().Contains(query.ToLower()) || cb.ShutterColor.ToLower().Contains(query.ToLower()))
                .Select(cb => cb).ToList();

            return Ok(filteredBoards);
        }

        [HttpGet("availableHomesId/{id}")]
        public IActionResult GetColorBoardByAvailableHomesId(int id)
        {
            var allColorBoardsByAvailableHomes = _repository.GetColorBoardByAvailableHomesId(id);

            return Ok(allColorBoardsByAvailableHomes);
        }
    }
}
