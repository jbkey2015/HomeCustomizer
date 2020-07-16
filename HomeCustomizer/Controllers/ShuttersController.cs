using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HomeCustomizer.DataAccess;
using Microsoft.AspNetCore.Mvc;
using HomeCustomizer.Models;


namespace HomeCustomizer.Controllers
{
    [Route("api/shutters")]
    [ApiController]
    public class ShuttersController : ControllerBase
    {
        ShuttersRepo _repository;

        public ShuttersController(ShuttersRepo repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult GetShutters()
        {
            var allShutters = _repository.GetAllShutters();

            return Ok(allShutters);
        }

        [HttpGet("shuttersId/{id}")]
        public IActionResult GetShuttersById(int id)
        {
            var shutters = _repository.GetShuttersById(id);
            if (shutters == null)
            {
                return NotFound("That shutter option does not exist");
            }
            return Ok(shutters);
        }
    }
}
