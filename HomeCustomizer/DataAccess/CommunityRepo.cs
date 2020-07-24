using Dapper;
using HomeCustomizer.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace HomeCustomizer.DataAccess
{
    public class CommunityRepo
    {
        string ConnectionString;

        public CommunityRepo(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("HomeCustomizer");
        }

        public IEnumerable<Community> GetAllCommunities()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<Community>("select * from Community");
            }
        }

        public Community GetCommunitiesById(int id)
        {
            var sql = @"select *
                        from Community
                        where id = @id";

            var parameters = new { Id = id };

            using (var db = new SqlConnection(ConnectionString))
            {
                return db.QueryFirstOrDefault<Community>(sql, parameters);
            }
        }


    }
}
