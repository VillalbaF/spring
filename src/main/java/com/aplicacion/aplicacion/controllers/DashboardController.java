package com.aplicacion.aplicacion.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(value = "/dashboard", method = RequestMethod.GET)
public class DashboardController {

    
    @RequestMapping(value = "/",   method = RequestMethod.GET)
    public  String dashboard(Model model){
        model.addAttribute("titulo", "titulo de prueba");
        return "dashboard";
    }


    @GetMapping("/tabla")
    public  String tabla(Model model){
        model.addAttribute("titulo2", "titulo de prueba");
        return "tabla";
    }






}
