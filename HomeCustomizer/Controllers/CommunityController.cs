using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HomeCustomizer.DataAccess;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HomeCustomizer.Controllers
{
    [Route("api/community")]
    [ApiController]
    public class CommunityController : ControllerBase
    {
        CommunityRepo _repository;

        public CommunityController(CommunityRepo repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult GetCommunities()
        {
            var allCommunities = _repository.GetAllCommunities();

            return Ok(allCommunities);
        }

        [HttpGet("communityId/{id}")]
        public IActionResult GetCommunitiesById(int id)
        {
            var communities = _repository.GetCommunitiesById(id);
            if (communities == null)
            {
                return NotFound("That community option does not exist");
            }
            return Ok(communities);
        }
    }
}
