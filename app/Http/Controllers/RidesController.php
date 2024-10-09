<?php

namespace App\Http\Controllers;

use App\Models\Rides;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RidesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $rides = Rides::paginate(2);

        return Inertia::render('Rides/Index', [
            'rides' => $rides,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Rides/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'route_name' => 'required',
            'bus_name' => 'required',
            'departure_time' => 'required',
            'departure_date' => 'required',
            'gender' => 'required',
        ]);

        Rides::create($validated);
        return redirect()->route('rides.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Rides $rides)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Rides $ride)
    {
        return Inertia::render('Rides/Edit', [
            'ride' => $ride,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Rides $rides)
    {
        $request->validate([
            'route_name' => 'required',
            'route' => 'required',
            'bus_name' => 'required',
            'departure_time' => 'required',
            'departure_date' => 'required',
        ]);

        $rides->update($request->all());

        return redirect()->route('rides.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Rides $rides)
    {
        //
    }
}
