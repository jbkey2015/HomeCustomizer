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
    }
}
