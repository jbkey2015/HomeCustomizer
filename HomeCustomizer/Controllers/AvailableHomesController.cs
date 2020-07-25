using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HomeCustomizer.DataAccess;
using Microsoft.AspNetCore.Mvc;


namespace HomeCustomizer.Controllers
{
    [Route("api/availableHomes")]
    [ApiController]
    public class AvailableHomesController : ControllerBase
    {
        AvailableHomesRepo _repository;

        public AvailableHomesController(AvailableHomesRepo repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult GetAvailableHomes()
        {
            var allAvailableHomes = _repository.GetAllAvailableHomes();

            return Ok(allAvailableHomes);
        }

        [HttpGet("availableHomesId/{id}")]
        public IActionResult GetAvailableHomesById(int id)
        {
            var availableHomes = _repository.GetAvailableHomesById(id);
            if (availableHomes == null)
            {
                return NotFound("That home is not available");
            }
            return Ok(availableHomes);
        }
    }
}
