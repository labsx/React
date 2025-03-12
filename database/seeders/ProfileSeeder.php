<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Profile;
use Illuminate\Database\Seeder;

class ProfileSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        Profile::factory()->create([
            'first_name' => 'John',
            'last_name' => 'Doe',
            'middle_name' => 'Cruz',
            'suffix' => 'Jr.',
            'job' => 'Software Engineer',
            'tittle' => 'Full Stack Mama Mo',
            'phone_number' => '123-456-7890',
            'email' => 'Z2BbI@example.com',
            'address' => '123 Main St, Anytown USA di mahanap hanap ewan ko nalang',
        ]);
    }
}
