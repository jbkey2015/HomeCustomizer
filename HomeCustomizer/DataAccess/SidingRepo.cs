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
    public class SidingRepo
    {
        string ConnectionString;

        public SidingRepo(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("HomeCustomizer");
        }

        public IEnumerable<Siding> GetAllSiding()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<Siding>("select * from siding");
            }
        }

        public Siding GetSidingById(int id)
        {
            var sql = @"select *
                        from Siding
                        where id = @id";

            var parameters = new { Id = id };

            using (var db = new SqlConnection(ConnectionString))
            {
                return db.QueryFirstOrDefault<Siding>(sql, parameters);
            }
        }
    }
}
